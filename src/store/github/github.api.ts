// библиотека RTK Query

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// это у меня данные где хранится мой локальный Api "../../models/models"

import { ServerResponse, IUser, IRepo } from '../../models/models';

// сдеся я подключил Api в Store

export const githubApi = createApi({
    // назвал имю 
    reducerPath: "github/api",
    // дал запрос на официальную сайт githubApi.com/
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    refetchOnFocus: true,
    endpoints: build => ({
        searchUsers: build.query<IUser[], string>({
            query: (search: string) => ({
                url: 'search/users',
                params: {
                    q: search,
                    per_page: 10
                }
            }),
            transformResponse: (response : ServerResponse<IUser>) => response.items
        }),
        getUserRepos: build.query<IRepo[], string>({
            query: (username: string) => ({
                url: `users/${username}/repos`
            })
        })
    })
})

export const { useSearchUsersQuery, useLazyGetUserReposQuery } = githubApi