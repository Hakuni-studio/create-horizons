// Campfires are already in Create's passive_boiler_heaters tag via #minecraft:campfires.
// Bulk fermenter heat is fixed in createsky mixins:
//   - BulkFermenterBlockEntityMixin calls updateHeat() each tick
//   - BasinBlockEntityMixin treats lit campfires as KINDLED (heated) instead of SMOULDERING

console.info('Create: Horizons heat source compat loaded')
