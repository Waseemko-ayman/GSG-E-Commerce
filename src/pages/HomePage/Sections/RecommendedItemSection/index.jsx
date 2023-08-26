import "./style.css";
import { RECOMMENDED_DATA } from "@/mock/RecommendedItem";
import RecommendedItemCard from "@/components/molecules/RecommendedItemCard";

const RecommendedItem = () => {
  return (
    <div className="recommended">
      <h2>Recommended items</h2>
      <div className="recommended__products">
        {RECOMMENDED_DATA.map(({ id, src, alt, description, price }) => (
          <RecommendedItemCard
            key={id}
            imageSrc={src}
            imageAlt={alt}
            price={price}
            descProduct={description}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendedItem;
