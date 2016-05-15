import AppDispatcher from '../dispatcher/AppDispatcher';
import KanbanConstants from '../constants/KanbanConstants';

const KanbanActions = {
  createList(text, boardID) {
    AppDispatcher.dispatch({
      actionType: KanbanConstants.LIST_CREATE,
      boardID,
      text,
    });
  },
  createCard(text, listID) {
    AppDispatcher.dispatch({
      actionType: KanbanConstants.CARD_CREATE,
      listID,
      text,
    });
  },
  toggleFilter(filterName) {
    AppDispatcher.dispatch({
      actionType: KanbanConstants.SET_FILTER,
      filterName,
    });
  },
};

module.exports = KanbanActions;