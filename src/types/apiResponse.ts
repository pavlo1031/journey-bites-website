export interface ApiResponse<T> {
  statusCode: number,
  message: string,
  data?: T,
  meta?: {
    page: number,
    totalPage: number,
    totalCount: number,
    pageSize: number
  }
}

export type LoginResponse = ApiResponse<{ token: string }>;