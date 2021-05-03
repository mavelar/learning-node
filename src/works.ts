export function pickAJob(option: number) {
    const jobs = {
        1: 'Engineer',
        2: 'Singer',
        3: 'Driver',
        4: 'Doctor',
        5: 'Developer',
    };
    return jobs[option];
}