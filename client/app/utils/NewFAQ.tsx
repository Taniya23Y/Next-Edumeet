"use client";

import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import React, { useEffect, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const NewFAQ = () => {
  const { data } = useGetHeroDataQuery("FAQ", {});
  const [questions, setQuestions] = useState<
    { _id: string; question: string; answer: string }[]
  >([]);
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  useEffect(() => {
    if (data?.layout?.faq) {
      setQuestions(data.layout.faq);
    }
  }, [data]);

  const toggleQuestion = (id: string) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 text-white">
      <div className="w-[100%] md:w-[80%] mx-auto py-12">
        <div className="space-y-6">
          {questions?.map((q) => (
            <motion.div
              key={q._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-black p-5 md:p-6 rounded-2xl shadow-lg"
            >
              <button
                className="flex items-center justify-between w-full text-left text-lg md:text-xl font-semibold text-white focus:outline-none"
                onClick={() => toggleQuestion(q._id)}
              >
                <span>{q.question}</span>
                <motion.span
                  animate={{ rotate: activeQuestion === q._id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-yellow"
                >
                  {activeQuestion === q._id ? (
                    <HiMinus className="h-6 w-6 text-yellow" />
                  ) : (
                    <HiPlus className="h-6 w-6 to-yellow" />
                  )}
                </motion.span>
              </button>

              <AnimatePresence>
                {activeQuestion === q._id && (
                  <motion.dd
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden mt-3 text-gray-300 text-base leading-relaxed"
                  >
                    {q.answer}
                  </motion.dd>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewFAQ;
