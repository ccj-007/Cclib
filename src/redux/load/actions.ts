export type loadType = {
  type: boolean;
};

export const actionLoading = (status: boolean): loadType => ({
  type: status,
});
