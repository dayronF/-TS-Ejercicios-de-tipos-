/* type TypeTransaction = "income" | "exit";

 type Transaction = {
   amount: number;
   type: TypeTransaction;
   category: string;
 };
 type Summary = {
   income: number;
   exit: number;
 };

  function getTransactionSummary (transactions: Transaction[]): Summary {
   return transactions.reduce((acc, cur) => {
     if(cur.type === "income"){
         acc.income += cur.amount;
     }else{ 
         acc.exit += cur.amount;
     }
     return acc;
   },
   {income: 0, exit: 0 }
     );
}

*/