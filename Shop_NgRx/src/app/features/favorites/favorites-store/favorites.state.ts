import {FavoriteItem} from '../../../shared/models/favourite-item.model';

export interface FavoritesState {
  items: FavoriteItem[];
}

// Initial State
export const initialFavoritesState: FavoritesState = {
  items: []
}
