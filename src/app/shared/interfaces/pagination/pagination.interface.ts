export interface IPagination {
  id?: string;
  itemsPerPage: number;
  currentPage: number;
  filterType?: string;
  filterKey?: string;
  filterTitle?: string;
}
