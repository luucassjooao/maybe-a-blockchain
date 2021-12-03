import { Schema, Document, model } from 'mongoose';

export interface IWallet extends Document {
  amount: number;
  index: number;
  prevHash: Array<string>;
  hash: string;
  currentowner: string | Schema.Types.ObjectId;
  transactions: Array<string>;
  avaibleforpurchase: boolean;
  codingforbuy: string;
  publickey: string;
  privatekey: string;
  lastmarketvalueupdate: string;
  _doc: object;
}

const walletSchema: Schema = new Schema<IWallet>(
  {
    amount: { type: Number, required: true },
    index: { type: Number, required: true, default: 0 },
    prevHash: [{ type: String, required: true, default: '0' }],
    hash: { type: String, required: true },
    currentowner: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
    transactions: [{ type: Schema.Types.ObjectId, ref: 'transaction' }],
    avaibleforpurchase: { type: Boolean, required: true, default: false },
    codingforbuy: { type: String },
    publickey: { type: String, required: true },
    privatekey: { type: String, required: true },
    lastmarketvalueupdate: { type: String, select: false },
  },
  {
    timestamps: true,
  }
);

const Wallet = model<IWallet>('wallet', walletSchema);
export { Wallet };
