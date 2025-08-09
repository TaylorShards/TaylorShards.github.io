// FILE: script.js
// PROJECT: TaylorShards.github.io
// PURPOSE: Behavioral Logic & System Interaction

document.addEventListener('DOMContentLoaded', () => {
    // Leave a record in the system log for observant operators.
    console.log('// KERNEL ACCESSED. All transmissions are public record. Welcome to the Dossier.');

    // Activate the live status indicator.
    const statusElement = document.querySelector('.status-live');
    if (statusElement) {
        statusElement.classList.add('blinking');
    }
});
