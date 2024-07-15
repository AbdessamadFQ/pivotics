import SegmentationChart from "../features/segmentations/SegmentationChart";
import SegmentationHeader from "../features/segmentations/SegmentationHeader";
import SegmentationNav from "../features/segmentations/SegmentationNav";
import Stats from "../features/segmentations/Stats";

export default function Segmentation() {
  return (
    <>
      <SegmentationHeader title="Market Segmentation">
        A breakdown of your core customers grouped by set metrics
      </SegmentationHeader>
      <SegmentationNav />
      <Stats />
      <SegmentationChart />
    </>
  );
}
