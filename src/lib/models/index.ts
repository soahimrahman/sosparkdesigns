import mongoose, { Schema, Model } from 'mongoose';

// ── Portfolio Project ──
const portfolioSchema = new Schema({
  title:       { type: String, required: true, trim: true },
  slug:        { type: String, required: true, unique: true, lowercase: true },
  category:    { type: String, required: true, enum: ['Branding', 'Web Design', 'Web Development', 'Graphic Design', 'Video', 'Page Management'] },
  description: { type: String, required: true },
  coverImage:  { type: String, default: '' },
  images:      [String],
  tags:        [String],
  client:      { type: String, default: '' },
  year:        { type: Number, default: () => new Date().getFullYear() },
  featured:    { type: Boolean, default: false },
  order:       { type: Number, default: 0 },
}, { timestamps: true });

// ── Service ──
const serviceSchema = new Schema({
  title:       { type: String, required: true, trim: true },
  slug:        { type: String, required: true, unique: true, lowercase: true },
  icon:        { type: String, default: '✦' },
  shortDesc:   { type: String, required: true },
  longDesc:    { type: String, required: true },
  features:    [String],
  startingAt:  { type: String, default: '' },
  order:       { type: Number, default: 0 },
  active:      { type: Boolean, default: true },
}, { timestamps: true });

// ── Team Member ──
const teamSchema = new Schema({
  name:        { type: String, required: true, trim: true },
  role:        { type: String, required: true },
  bio:         { type: String, required: true },
  photo:       { type: String, default: '' },
  socials: {
    instagram: { type: String, default: '' },
    linkedin:  { type: String, default: '' },
    twitter:   { type: String, default: '' },
    behance:   { type: String, default: '' },
  },
  order:       { type: Number, default: 0 },
  active:      { type: Boolean, default: true },
}, { timestamps: true });

// ── Testimonial / Review ──
const testimonialSchema = new Schema({
  name:        { type: String, required: true, trim: true },
  role:        { type: String, required: true },
  company:     { type: String, default: '' },
  text:        { type: String, required: true },
  rating:      { type: Number, min: 1, max: 5, default: 5 },
  avatar:      { type: String, default: '' },
  initials:    { type: String, default: '' },
  featured:    { type: Boolean, default: false },
  approved:    { type: Boolean, default: true },
}, { timestamps: true });

// ── FAQ ──
const faqSchema = new Schema({
  question:  { type: String, required: true, trim: true },
  answer:    { type: String, required: true },
  category:  { type: String, default: 'General' },
  order:     { type: Number, default: 0 },
  active:    { type: Boolean, default: true },
}, { timestamps: true });

// ── Offer / Promo ──
const offerSchema = new Schema({
  title:       { type: String, required: true },
  description: { type: String, required: true },
  badge:       { type: String, default: 'Limited' },
  active:      { type: Boolean, default: true },
  expiresAt:   { type: Date, default: null },
}, { timestamps: true });

// ── Contact Message ──
const contactSchema = new Schema({
  name:        { type: String, required: true, trim: true },
  email:       { type: String, required: true, lowercase: true, trim: true },
  company:     { type: String, default: '' },
  service:     { type: String, default: '' },
  budget:      { type: String, default: '' },
  message:     { type: String, required: true },
  read:        { type: Boolean, default: false },
  replied:     { type: Boolean, default: false },
}, { timestamps: true });

// ── Admin User (RBAC) ──
const adminSchema = new Schema({
  username:     { type: String, required: true, unique: true, lowercase: true },
  passwordHash: { type: String, required: true },
  role:         { type: String, enum: ['admin', 'super_admin', 'editor', 'support', 'viewer'], default: 'editor' },
  active:       { type: Boolean, default: true },
  invitedBy:    { type: String, default: null },
}, { timestamps: true });

adminSchema.set('toJSON', {
  transform: (_doc, ret) => {
    delete ret.passwordHash;
    return ret;
  },
});

// ── Site Settings ──
const settingSchema = new Schema({
  key:       { type: String, required: true, unique: true, trim: true },
  value:     { type: Schema.Types.Mixed, required: true },
  type:      { type: String, enum: ['text', 'richtext', 'boolean', 'number', 'json', 'image'], default: 'text' },
  group:     { type: String, default: 'general', trim: true, lowercase: true },
  label:     { type: String, default: '' },
  updatedBy: { type: String, default: '' },
}, { timestamps: true });

// ── Page View Analytics ──
const pageViewSchema = new Schema({
  path:           { type: String, required: true, index: true },
  referrer:       { type: String, default: '' },
  referrerSource: { type: String, default: 'direct', index: true },
  country:        { type: String, default: 'Unknown', index: true },
  device:         { type: String, default: 'unknown' },
  browser:        { type: String, default: 'unknown' },
  visitorId:      { type: String, default: '', index: true },
  statusCode:     { type: Number, default: 200 },
}, { timestamps: true });

pageViewSchema.index({ createdAt: -1 });

// ── Error Log ──
const errorLogSchema = new Schema({
  message:    { type: String, required: true },
  stack:      { type: String, default: '' },
  path:       { type: String, default: '' },
  method:     { type: String, default: '' },
  statusCode: { type: Number, default: 500 },
}, { timestamps: true });

errorLogSchema.index({ createdAt: -1 });

// ── Blog Post ──
const blogPostSchema = new Schema({
  title:       { type: String, required: true, trim: true },
  slug:        { type: String, required: true, unique: true, lowercase: true },
  excerpt:     { type: String, required: true },
  content:     { type: String, required: true },
  coverImage:  { type: String, default: '' },
  tags:        [String],
  author:      { type: String, default: 'Soahim Rahman Tasin' },
  published:   { type: Boolean, default: false },
  publishedAt: { type: Date, default: null },
}, { timestamps: true });

// ── API Key Pool ──
const apiKeySchema = new Schema({
  provider:     { type: String, required: true, trim: true, lowercase: true },
  encryptedKey: { type: String, required: true, select: false },
  last4:        { type: String, required: true },
  active:       { type: Boolean, default: true },
  lastUsed:     { type: Date, default: null },
  failCount:    { type: Number, default: 0 },
}, { timestamps: true });

apiKeySchema.set('toJSON', {
  transform: (_doc, ret) => {
    delete ret.encryptedKey;
    return ret;
  },
});

// ── Video ──
const videoSchema = new Schema({
  title:        { type: String, required: true, trim: true },
  slug:        { type: String, required: true, unique: true, lowercase: true },
  description:  { type: String, default: '' },
  source:       { type: String, enum: ['upload', 'youtube'], required: true },
  filename:     { type: String, default: '' },
  originalName: { type: String, default: '' },
  mimeType:     { type: String, default: '' },
  fileSize:     { type: Number, default: 0 },
  youtubeId:    { type: String, default: '' },
  youtubeUrl:   { type: String, default: '' },
  thumbnail:    { type: String, default: '' },
  category:     { type: String, default: '', trim: true },
  tags:         [String],
  featured:     { type: Boolean, default: false },
  active:       { type: Boolean, default: true },
  order:        { type: Number, default: 0 },
  uploadedBy:   { type: String, default: '' },
}, { timestamps: true });

export const Portfolio: Model<any>   = mongoose.models.Portfolio   || mongoose.model('Portfolio', portfolioSchema);
export const Service: Model<any>     = mongoose.models.Service     || mongoose.model('Service', serviceSchema);
export const Team: Model<any>        = mongoose.models.Team        || mongoose.model('Team', teamSchema);
export const Testimonial: Model<any> = mongoose.models.Testimonial || mongoose.model('Testimonial', testimonialSchema);
export const FAQ: Model<any>         = mongoose.models.FAQ         || mongoose.model('FAQ', faqSchema);
export const Offer: Model<any>       = mongoose.models.Offer       || mongoose.model('Offer', offerSchema);
export const Contact: Model<any>     = mongoose.models.Contact     || mongoose.model('Contact', contactSchema);
export const Admin: Model<any>       = mongoose.models.Admin       || mongoose.model('Admin', adminSchema);
export const ApiKey: Model<any>      = mongoose.models.ApiKey      || mongoose.model('ApiKey', apiKeySchema);
export const Setting: Model<any>     = mongoose.models.Setting     || mongoose.model('Setting', settingSchema);
export const PageView: Model<any>    = mongoose.models.PageView    || mongoose.model('PageView', pageViewSchema);
export const ErrorLog: Model<any>    = mongoose.models.ErrorLog    || mongoose.model('ErrorLog', errorLogSchema);
export const BlogPost: Model<any>    = mongoose.models.BlogPost    || mongoose.model('BlogPost', blogPostSchema);
export const Video: Model<any>       = mongoose.models.Video       || mongoose.model('Video', videoSchema);
