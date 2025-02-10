import { pgTable, text, uuid, decimal, boolean, timestamp } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: text('email').notNull(),
  firstName: text('first_name'),
  lastName: text('last_name'),
  createdAt: text('created_at').default('now()'),
});

export const payments = pgTable("payments", {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid("user_id") // Change this to uuid if the users.id is uuid
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  checkoutRequestId: text("checkout_request_id").unique(),
  mpesaTransactionId: text("mpesa_transaction_id").unique(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  paid: boolean("paid").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});