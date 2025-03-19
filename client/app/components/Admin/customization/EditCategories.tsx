/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import {
  useEditLayoutMutation,
  useGetHeroDataQuery,
} from "@/redux/features/layout/layoutApi";
import Loader from "../../Loader/Loader";
import { styles } from "@/app/styles/style";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";

interface Category {
  _id: string;
  title: string;
}

const EditCategories = () => {
  const [showContent, setShowContent] = useState(false);
  const { data, isLoading, refetch } = useGetHeroDataQuery("Categories", {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  const [editLayout, { isSuccess: layoutSuccess, error }] =
    useEditLayoutMutation();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    if (data?.layout?.categories) {
      setCategories(data.layout.categories);
    }
    if (layoutSuccess) {
      refetch();
      toast.success("Categories updated successfully");
    }
    if (error && "data" in error) {
      toast.error((error as any)?.data?.message || "Something went wrong");
    }
  }, [data, layoutSuccess, error, refetch]);

  // Function to update category title
  const handleCategoryChange = (id: string, value: string) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category._id === id ? { ...category, title: value } : category
      )
    );
  };

  // Add a new category (temporary unique ID)
  const addNewCategory = () => {
    if (!categories.some((cat) => cat.title.trim() === "")) {
      setCategories([...categories, { _id: `${Date.now()}`, title: "" }]);
    } else {
      toast.error(
        "Please fill in the existing category before adding a new one."
      );
    }
  };

  // Delete category by ID
  const deleteCategory = (id: string) => {
    setCategories(categories.filter((category) => category._id !== id));
  };

  // Check if categories have changed
  const areCategoriesUnchanged = () =>
    JSON.stringify(data?.layout?.categories) === JSON.stringify(categories);

  // Check if any category title is empty
  const isAnyCategoryTitleEmpty = () =>
    categories.some((category) => category.title.trim() === "");

  // Save categories to the backend
  const editCategoriesHandler = async () => {
    if (!areCategoriesUnchanged() && !isAnyCategoryTitleEmpty()) {
      await editLayout({ type: "Categories", categories });
    }
  };

  return (
    <>
      {isLoading || !showContent ? (
        <Loader onComplete={() => setShowContent(true)} />
      ) : (
        <div className="mt-[120px] text-center">
          <h1 className={styles.title}>All Categories</h1>

          <div className="flex flex-col items-center space-y-4">
            {categories.map((item) => (
              <div
                key={item._id}
                className="flex items-center space-x-2 w-full max-w-md"
              >
                <input
                  className={`${styles.input} w-full border border-gray-300 rounded-md px-3 py-2`}
                  value={item.title}
                  onChange={(e) =>
                    handleCategoryChange(item._id, e.target.value)
                  }
                  placeholder="Enter category title..."
                />
                <AiOutlineDelete
                  className="text-red-500 cursor-pointer text-xl"
                  onClick={() => deleteCategory(item._id)}
                />
              </div>
            ))}

            <button
              className="flex items-center space-x-2 text-green-600 cursor-pointer"
              onClick={addNewCategory}
            >
              <IoMdAddCircleOutline className="text-2xl" />
              <span>Add Category</span>
            </button>

            <button
              className={`px-6 py-2 mt-4 rounded-md transition ${
                areCategoriesUnchanged() || isAnyCategoryTitleEmpty()
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-green-500 text-white hover:bg-green-600"
              }`}
              onClick={editCategoriesHandler}
              disabled={areCategoriesUnchanged() || isAnyCategoryTitleEmpty()}
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EditCategories;
