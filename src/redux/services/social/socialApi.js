import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const socialApi = createApi({
    reducerPath: 'socialApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://social-pedia-server-780h.onrender.com/api/v1/social' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => '/get',
        }),
        getSinglePost: builder.query({
            query: (id) => `/get/${id}`,
        }),
    }),
});

export const { useGetPostsQuery, useGetSinglePostQuery } = socialApi;