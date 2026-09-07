// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {
  event.remove({ output: 'create:hand_crank' })

  event.shaped('create:hand_crank', [
    'CCC',
    '  A'
  ], {
    C: '#minecraft:planks',
    A: 'createsky:andesite_pebble'
  }).id('createsky:hand_crank_from_pebble')
})
