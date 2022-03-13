import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
);

export const selectDirectoryMainRoute = createSelector(
    [selectDirectory],
    directory => directory.mainRoute
);

export const selectBitacoras = createSelector(
    [selectDirectory],
    directory => directory.bitacoras
)

export const selectRegisterRoute = createSelector(
    [selectBitacoras, selectDirectoryMainRoute],
    (bitacora, route) => bitacora[route]
)