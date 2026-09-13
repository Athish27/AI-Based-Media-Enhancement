const transactions = [
  { id: 1, type: "purchase", amount: 120, status: "completed" },
  { id: 2, type: "refund", amount: 45, status: "pending" },
  { id: 3, type: "purchase", amount: 80, status: "completed" },
  { id: 4, type: "purchase", amount: 250, status: "failed" },
  { id: 5, type: "subscription", amount: 15, status: "completed" }
];
const TotalTransactionsCompleted = transactions.map(transaction => ({ ...transaction, Currency: "USD" }))
.filter(transaction => transaction.status === "completed")
.forEach(transaction => {transaction.amount += transaction.amount, 0;});

console.log("Total amount of completed transactions:", TotalTransactionsCompleted);

