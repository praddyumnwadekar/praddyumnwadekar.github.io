'use client';

import { motion } from 'framer-motion';
import {
  LockKeyhole,
  Database,
  Gauge,
  CreditCard,
  ShieldCheck,
  TestTube2,
} from 'lucide-react';

const EVIDENCE = [
  {
    icon: LockKeyhole,
    eyebrow: 'SECURITY',
    title: 'User-scoped authorization',
    description:
      'Cart and order operations are scoped to the authenticated user, with regression coverage for cross-user modification and incorrect CartItem targeting.',
    tag: 'AUTHORIZATION',
  },
  {
    icon: Database,
    eyebrow: 'DATA INTEGRITY',
    title: 'Server-side validation',
    description:
      'Checkout recalculates cart totals on the server and rejects inconsistent totals when the cart changes during the checkout lifecycle.',
    tag: 'CONSISTENCY',
  },
  {
    icon: ShieldCheck,
    eyebrow: 'CONCURRENCY',
    title: 'Transactional checkout',
    description:
      'Critical checkout work runs inside database transactions with row-level locking for pending orders, cart items, and inventory records.',
    tag: 'ATOMICITY',
  },
  {
    icon: Gauge,
    eyebrow: 'ORM / PERFORMANCE',
    title: 'Intentional data loading',
    description:
      'Cart and checkout queries use select_related() for product relationships and prefetch_related() for product variations.',
    tag: 'ORM',
  },
  {
    icon: CreditCard,
    eyebrow: 'PAYMENTS',
    title: 'PayPal verification',
    description:
      'Payment status, amount, order association, and transaction reuse are validated before an order is finalized.',
    tag: 'REPLAY PROTECTION',
  },
  {
    icon: TestTube2,
    eyebrow: 'TESTING',
    title: 'Regression coverage',
    description:
      '20 focused cart and quantity-control tests cover authorization, variations, stock limits, quantity boundaries, deletion, and HTTP-method behavior.',
    tag: '20 FOCUSED TESTS',
  },
];

export default function ShipShopEngineeringEvidence() {
  return (
    <section
      aria-labelledby="shipshop-engineering-evidence"
      className="mt-8 border-t border-slate-800 pt-8 sm:mt-10 sm:pt-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45 }}
        className="mb-7"
      >
        <div className="section-eyebrow">Engineering Evidence</div>

        <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h3
              id="shipshop-engineering-evidence"
              className="text-2xl font-bold tracking-tight text-white"
            >
              Built around correctness, not just features.
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
              The strongest parts of ShipShop are the decisions behind the
              checkout, cart, authorization, and testing flows.
            </p>
          </div>

          <div className="shrink-0 rounded-lg border border-slate-800 bg-[#090D14] px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-slate-400">
            Django · MySQL · PayPal
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {EVIDENCE.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.eyebrow}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="group rounded-xl border border-slate-800 bg-[#0D121B] p-5 transition-colors duration-200 hover:border-slate-700"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-[#090D14]">
                  <Icon
                    aria-hidden="true"
                    className="h-4 w-4 text-sky-400"
                    strokeWidth={1.7}
                  />
                </div>

                <span className="rounded-md border border-slate-800 bg-[#090D14] px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-slate-500">
                  {item.tag}
                </span>
              </div>

              <div className="mt-5">
                <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-emerald-400">
                  {item.eyebrow}
                </div>

                <h4 className="mt-2 text-sm font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-4 flex flex-col gap-2 rounded-xl border border-slate-800 bg-[#090D14] px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
          Broader Django test suite
        </span>
        <span className="text-xs text-slate-300">
          99 tests in the recorded suite · 20 focused cart tests explicitly passed
        </span>
      </motion.div>
    </section>
  );
}
