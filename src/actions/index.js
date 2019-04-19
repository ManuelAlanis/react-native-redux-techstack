export const selectLibrary = (libraryId) => {
    console.log('(libraryId', libraryId);
    return {
        type: 'select_library',
        payload: libraryId
    };
};