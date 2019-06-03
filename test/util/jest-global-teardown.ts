export default async () => {
    try {
        // Add global teardown methods
        return;
    } catch (err) {
        console.error('Could not close database in global teardown!', err.message);
    }
};
