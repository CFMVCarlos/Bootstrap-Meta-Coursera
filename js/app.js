/**
 * @fileoverview Frontend application logic including strict form validation,
 * mock asynchronous backend communication, and UI state management.
 * @author Elite Full-Stack Architect
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm');
    const submitBtn = document.getElementById('submitOrderBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const spinner = submitBtn.querySelector('.spinner-border');
    const toastElement = document.getElementById('liveToast');
    const toastMessage = document.getElementById('toastMessage');

    // Initialize Bootstrap Toast
    // Type definition for bootstrap is assumed globally available via CDN
    const toast = new bootstrap.Toast(toastElement, { delay: 4000 });

    /**
     * Shows a toast notification.
     * @param {string} message - The message to display.
     * @param {'success' | 'danger'} type - The type of toast (determines color).
     */
    function showToast(message, type = 'success') {
        toastMessage.textContent = message;

        // Reset classes
        toastElement.classList.remove('text-bg-success', 'text-bg-danger');

        // Apply type classes
        if (type === 'success') {
            toastElement.classList.add('text-bg-success');
        } else {
            toastElement.classList.add('text-bg-danger');
        }

        toast.show();
    }

    /**
     * Toggles the loading state of the submit button.
     * @param {boolean} isLoading - Whether the button should be in a loading state.
     */
    function setLoadingState(isLoading) {
        if (isLoading) {
            submitBtn.disabled = true;
            btnText.classList.add('invisible');
            spinner.classList.remove('d-none');
        } else {
            submitBtn.disabled = false;
            btnText.classList.remove('invisible');
            spinner.classList.add('d-none');
        }
    }

    /**
     * Mocks a backend API call to submit an order.
     * Implements non-blocking, asynchronous Promise resolution.
     *
     * @param {Object} orderData - The structured order payload.
     * @param {string} orderData.customerName - Name of the customer.
     * @param {string} orderData.orderItem - The ID/value of the ordered item.
     * @returns {Promise<Object>} A promise resolving to a standardized JSON response.
     */
    async function submitOrderMockBackend(orderData) {
        return new Promise((resolve, reject) => {
            // Simulate network latency (1.5 seconds)
            setTimeout(() => {
                // Simulate backend validation or random error (10% chance to fail for demo purposes)
                const isSuccess = Math.random() > 0.1;

                if (isSuccess) {
                    resolve({
                        status: 'success',
                        message: `Order confirmed for ${orderData.customerName}!`,
                        data: {
                            orderId: 'ORD-' + Math.floor(Math.random() * 100000)
                        }
                    });
                } else {
                    // Standardized error response
                    reject({
                        status: 'error',
                        message: 'Our kitchen is currently too busy. Please try again in a moment.',
                        code: 503
                    });
                }
            }, 1500);
        });
    }

    /**
     * Handles the form submission event.
     * Applies strict frontend validation and coordinates UI state.
     *
     * @param {Event} event - The DOM submit event.
     */
    async function handleFormSubmit(event) {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;

        // Bootstrap native validation feedback
        form.classList.add('was-validated');

        if (!form.checkValidity()) {
            // Form is invalid, stop here
            return;
        }

        // Form is valid, extract data
        const customerName = document.getElementById('customerName').value.trim();
        const orderItem = document.getElementById('orderItem').value;

        const payload = {
            customerName,
            orderItem
        };

        // Transition UI to loading state
        setLoadingState(true);

        try {
            // Execute mock backend call
            const response = await submitOrderMockBackend(payload);

            // Handle success
            showToast(response.message, 'success');

            // Reset form visually and state
            form.reset();
            form.classList.remove('was-validated');

        } catch (error) {
            // Handle expected and unexpected exceptions
            console.error('[App] Order Submission Failed:', error);

            const errorMessage = error.message || 'An unexpected error occurred. Please try again.';
            showToast(errorMessage, 'danger');
        } finally {
            // Always revert loading state regardless of outcome
            setLoadingState(false);
        }
    }

    // Bind event listeners
    if (orderForm) {
        orderForm.addEventListener('submit', handleFormSubmit);
    }
});
