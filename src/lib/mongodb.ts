import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { Admin, Service, Portfolio, Team, FAQ, Testimonial } from './models';
import {
  DEFAULT_SERVICES,
  DEFAULT_PORTFOLIO,
  DEFAULT_TEAM,
  DEFAULT_FAQS,
  DEFAULT_TESTIMONIALS,
} from './seedData';

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/sosparkdesign';

const DEFAULT_USERNAME = 'admin';
const DEFAULT_PASSWORD = 'soaspark2024';

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
  seeded: boolean;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongooseCache || {
  conn: null,
  promise: null,
  seeded: false,
};

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

async function ensureDefaultData() {
  try {
    // 1. Admin seed
    const adminCount = await Admin.countDocuments();
    if (adminCount === 0) {
      const passwordHash = await bcrypt.hash(DEFAULT_PASSWORD, 12);
      await Admin.create({
        username: DEFAULT_USERNAME,
        passwordHash,
        role: 'super_admin',
        active: true,
      });
      console.log('✅ Default admin auto-created: admin / soaspark2024');
    }

    // 2. Services seed
    const serviceCount = await Service.countDocuments();
    if (serviceCount === 0) {
      await Service.insertMany(DEFAULT_SERVICES);
      console.log('✅ Default services auto-seeded');
    }

    // 3. Portfolio seed
    const portfolioCount = await Portfolio.countDocuments();
    if (portfolioCount === 0) {
      await Portfolio.insertMany(DEFAULT_PORTFOLIO);
      console.log('✅ Default portfolio projects auto-seeded');
    }

    // 4. Team seed
    const teamCount = await Team.countDocuments();
    if (teamCount === 0) {
      await Team.insertMany(DEFAULT_TEAM);
      console.log('✅ Default team auto-seeded');
    }

    // 5. FAQ seed
    const faqCount = await FAQ.countDocuments();
    if (faqCount === 0) {
      await FAQ.insertMany(DEFAULT_FAQS);
      console.log('✅ Default FAQs auto-seeded');
    }

    // 6. Testimonial seed
    const testCount = await Testimonial.countDocuments();
    if (testCount === 0) {
      await Testimonial.insertMany(DEFAULT_TESTIMONIALS);
      console.log('✅ Default testimonials auto-seeded');
    }
  } catch (err: any) {
    console.error('Error in ensureDefaultData:', err?.message || err);
  }
}

export async function connectMongo(): Promise<typeof mongoose> {
  if (cached.conn && mongoose.connection.readyState === 1) {
    if (!cached.seeded) {
      cached.seeded = true;
      ensureDefaultData();
    }
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: mongoose.ConnectOptions = {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 10000,
      family: 4, // Force IPv4
    };

    cached.promise = mongoose.connect(MONGO_URI, opts).then(async (m) => {
      console.log('✅ MongoDB connected:', m.connection.host);
      if (!cached.seeded) {
        cached.seeded = true;
        ensureDefaultData();
      }
      return m;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export function getDbState(): { state: number; status: string } {
  const state = mongoose.connection.readyState;
  const states: Record<number, string> = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
  };
  return { state, status: states[state] || 'unknown' };
}
