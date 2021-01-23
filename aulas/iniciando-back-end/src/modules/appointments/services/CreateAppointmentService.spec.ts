import FakeAppointmentRepository from '../repositories/fakes/FakeAppointmentsRepository';

import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentRepository = new FakeAppointmentRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '12312412',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('12312412');
  });

  // it('should not be able to create two appointments in the same time', () => {
  //   expect(1 + 2).toBe(3);
  // });
});
