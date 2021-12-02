import { Schema, Document, model } from 'mongoose';

export interface IUser extends Document {
  _id: string;
  name: string;
  age: number;
  cpf: string;
  password: string;
  moneyoutcoins: number;
  totalcoins: Array<string>;
  moneyincoins: number;
  transactions: Array<string>;
  ownerenterprise: Array<string>;
  employeeEnterprise: string;
  products: Array<string>;
  creditsocial: string;
  _doc: object;
}

const userSchema: Schema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    cpf: { type: String, required: true },
    password: { type: String, required: [true, 'please password'] },
    moneyoutcoins: { type: Number, default: 0 },
    moneyincoins: { type: Number },
    totalcoins: [
      {
        coinid: { type: String },
        namehashcoin: { type: String },
      },
    ],
    transactions: [{ type: Schema.Types.ObjectId, ref: 'transaction' }],
    ownerenterprise: [{ type: Schema.Types.ObjectId, ref: 'enterprise' }],
    employeeEnterprise: { type: Schema.Types.ObjectId, ref: 'enterprise' },
    products: [{ type: Schema.Types.ObjectId, ref: 'product' }],
    creditsocial: { type: String, default: 'negative kkkkkkkkkkkkkkkkkkkkk' },
  },
  {
    timestamps: true,
  }
);

const User = model<IUser>('user', userSchema);
export { User };
