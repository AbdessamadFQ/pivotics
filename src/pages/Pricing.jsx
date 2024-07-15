import PricingLayout from "../features/pricing/PricingLayout";
import PageHeader from "../ui/PageHeader";

export default function Pricing() {
  return (
    <>
      <PageHeader
        title="Price Optimisation"
        btn={true}
      >
        AI suggestions for ideal pricing and insights into your market
      </PageHeader>
      <PricingLayout />
    </>
  );
}
