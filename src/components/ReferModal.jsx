// src/components/ReferModal.js
import React from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

Modal.setAppElement('#root');

const ReferModal = ({ isOpen, onRequestClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic
    onRequestClose(); // Close the modal after submission
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Refer a Friend"
      className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto my-10"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <h2 className="text-2xl font-bold mb-4">Refer a Friend</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="w-block text-gray-700 mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className={classNames('w-full p-2 border rounded', { 'border-red-500': errors.name })}
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Friend's Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address',
              },
            })}
            className={classNames('w-full p-2 border rounded', { 'border-red-500': errors.email })}
            placeholder="Enter your friend's email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Send Referral
        </button>
      </form>
      <button
        onClick={onRequestClose}
        className="mt-4 text-gray-500 hover:underline focus:outline-none"
      >
        Close
      </button>
    </Modal>
  );
};

export default ReferModal;