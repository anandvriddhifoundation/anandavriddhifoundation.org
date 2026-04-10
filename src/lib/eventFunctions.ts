// 'use server';

// import { appClient } from '@/auth/Config';
// import { EventCreateInput, SingleEventOutput } from '@/client/types.gen';

// export const createEvent = async (data: EventCreateInput) => {
//   return appClient.EventsService.createEventEventsCreateEventPost({
//     requestBody: data,
//   });
// };

// export const editEvent = async (data: SingleEventOutput) => {
//   return appClient.EventsService.editEventEventsEditEventPut({
//     requestBody: data,
//   });
// };

// export const deleteEvent = async (id: number) => {
//   return appClient.EventsService.deleteEventEventsDeleteEventDelete({
//     id: id,
//   });
// };

// export const getEventsList = async (
//   skip: number = 0,
//   limit: number = 10,
//   order_by: string = 'latest',
// ) => {
//   return appClient.EventsService.getEventsEventsEventsPost({
//     requestBody: {
//       skip: skip,
//       limit: limit,
//       order_by: order_by,
//     },
//   });
// };

// export const getEventDetailsBySlug = async (slug: string) => {
//   return appClient.EventsService.getEventBySlugEventsEventGet({
//     slug: slug,
//   });
// };
