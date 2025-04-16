import { apiSlice } from "../api/apiSlice";

export const layoutApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHeroData: builder.query({
      query: (type) => ({
        url: `get-layout/${type}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),

    editLayout: builder.mutation({
      query: ({
        type,
        image,
        firstTitle,
        midTitle,
        lastTitle,
        faq,
        categories,
      }) => ({
        url: `edit-layout`,
        body: {
          type,
          image,
          firstTitle,
          midTitle,
          lastTitle,
          faq,
          categories,
        },
        method: "PUT",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const { useGetHeroDataQuery, useEditLayoutMutation } = layoutApi;
