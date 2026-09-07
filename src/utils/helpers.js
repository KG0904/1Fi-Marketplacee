// Utility: Format Indian Rupee price
export const formatINR = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
};

// Get the cheapest monthly installment from emiPlans
export const getLowestEMI = (emiPlans) => {
  if (!emiPlans || emiPlans.length === 0) return null;
  return emiPlans.reduce((min, plan) =>
    plan.monthlyInstallment < min.monthlyInstallment ? plan : min
  );
};
