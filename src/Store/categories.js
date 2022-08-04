const initialState = [
  {
    name: 'Maps',
    displayName: 'Maps',
    description: 'USGS & Land Survey Maps'
  },
  {
    name: 'Tents',
    displayName: 'Tents',
    description: 'Big Agnes, HLMG, NERO, Mountain Hardware'
  },
  {
    name: 'Backpacks',
    displayName: 'Backpacks',
    description: 'Osprey, Mountain Smith, Arctryx, Deutur'
  }
]

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}