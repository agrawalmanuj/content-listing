import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import ContentGrid from './components/ContentGrid';
import { fetchContentPage } from './redux/thunks/contentThunks';

function App() {
  const dispatch = useDispatch();
  const { title, items, loading, hasMore, currentPage } = useSelector(state => state.content);
  const { searchActive, searchQuery } = useSelector(state => state.search);

  // Initial data load
  useEffect(() => {
    dispatch(fetchContentPage(1));
  }, [dispatch]);

  // Filter items based on search query
  const filteredItems = searchQuery.trim() === ''
    ? items
    : items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const loadMore = () => {
    if (!loading && hasMore) {
      dispatch(fetchContentPage(currentPage));
    }
  };

  return (
    <div className="app-container">
      <Header title={title} />
      <ContentGrid
        searchActive={searchActive}
        items={filteredItems}
        loading={loading}
        hasMore={hasMore}
        loadMore={loadMore}
        searchQuery={searchQuery}
      />
    </div>
  );
}

export default App;