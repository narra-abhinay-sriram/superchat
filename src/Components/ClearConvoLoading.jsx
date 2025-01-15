import Lottie from "lottie-react";
import deleting from '../assets/lottie/Animation - 1736421418196.json';

export default function ClearConvoLoading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="w-64 h-64">
        <Lottie animationData={deleting} />
      </div>
    </div>
  );
}