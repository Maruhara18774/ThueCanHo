import MainContact from '../pages/MainContact'
import GenerationInformation from '../pages/GenerationInformation'
import PropertyFacilities from '../pages/PropertyFacilities'
import Rooms from '../pages/Rooms'
import RoomFacilities from '../pages/RoomFacilities'
const SidebarData = [
  {
    key: 1,
    cFlexbox: 'flexbox-sidebar css-nb',
    cText: 'text css-nb-text',
    cNumber: 'bagde__number bagde__color bagde__pill css-bagde',
    title: 'Main Contact',
    number: 1,
    path: "/registrationDetail/mainContact",
    main: () => <MainContact/>,
    exact: true
  },
  {
    key: 2,
    cFlexbox: 'flexbox-sidebar css-nb',
    cText: 'text css-nb-text',
    cNumber: 'bagde__number bagde__color bagde__pill css-bagde',
    title: 'General Information',
    number: 1,
    path: "/registrationDetail/generationInformation",
    main: () => <GenerationInformation/>,
  },
  {
    key: 3,
    cFlexbox: 'flexbox-sidebar css-nb',
    cText: 'text css-nb-text',
    cNumber: 'bagde__number bagde__color bagde__pill css-bagde',
    title: 'Property Facilities',
    number: 1,
    path: "/registrationDetail/propertyFacilities",
    main: () => <PropertyFacilities/>,
    exact: true
  },
  {
    key: 4,
    cFlexbox: 'flexbox-sidebar css-nb',
    cText: 'text css-nb-text',
    cNumber: 'bagde__number bagde__color bagde__pill css-bagde',
    title: 'Rooms',
    number: 1,
    path: "/registrationDetail/rooms",
    main: () => <Rooms/>,
    exact: true
  },
  {
    key: 5,
    cFlexbox: 'flexbox-sidebar css-nb',
    cText: 'text css-nb-text',
    cNumber: 'bagde__number bagde__color bagde__pill css-bagde',
    title: 'Room Facilities',
    number: 1,
    path: "/registrationDetail/roomFacilities",
    main: () => <RoomFacilities/>,
    exact: true
  },
  {
    key: 6,
    cFlexbox: 'flexbox-sidebar css-nb',
    cText: 'text css-nb-text',
    cNumber: 'bagde__number bagde__color bagde__pill css-bagde',
    title: 'Photos',
    number: 1,
    path: "/",
    exact: true
  },
  {
    key: 7,
    cFlexbox: 'flexbox-sidebar css-nb',
    cText: 'text css-nb-text',
    cNumber: 'bagde__number bagde__color bagde__pill css-bagde',
    title: 'Payment Information',
    number: 1,
    path: "/"
  }
];
export default SidebarData;