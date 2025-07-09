import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./Category.css";

interface CategoryCard {
  name: string;
  image: string;
}

const Categories = () => {
  const [categoryCards, setCategoryCards] = useState<CategoryCard[]>([]);
  const navigate = useNavigate();
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products/categories");
        const categoryList: string[] = res.data;
        const promises = categoryList.map(async (category) => {
          const productRes = await axios.get(
            `https://fakestoreapi.com/products/category/${category}`
          );
          const firstProduct = productRes.data[0];
          return {
            name: category,
            image: firstProduct?.image || "", 
          };
        });
        const results = await Promise.all(promises);
        setCategoryCards(results);
      } catch (err) {
        console.error("Error fetching categories or images:", err);
      }
    };

    fetchCategories();
  }, []);
  
  const formatCategory = (cat: string): string => {
    if (cat === "men's clothing") return "Men's clothing";
    if (cat === "women's clothing") return "Women's Clothing";
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  };
  return (
    <div className="category-container">
      <div className="category-gridd">
        {categoryCards.map((data) => (
          <div
            key={data.name}
            className="category-card"
            onClick={() => navigate(`/category/${data.name}`)}
            >
            <img src={data.image} alt={data.name} />
            <h5 className="formatimg">{formatCategory(data.name)}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
