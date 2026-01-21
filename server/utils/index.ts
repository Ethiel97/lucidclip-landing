type ApiResponse<T> = {
  data?: T,
}

type ErrorResponse<T> = ApiResponse<T> & {
  error?: string,
  success: false,
}

type SuccessResponse<T> = ApiResponse<T> & {
  success: true,
  data: T,
}

export * from './webhook';
export type {ApiResponse, ErrorResponse, SuccessResponse};
