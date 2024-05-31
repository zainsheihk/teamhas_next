export const bookACallAPiHandler = async (Data) => {
    const res = await fetch('/api/book-a-call', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Data),
    });

    if (!res.ok) {
        console.error('Failed to fetch data:', res.statusText);
        return null
    }

    const data = await res.json();

    return data;
}

export const applyNowAPiHandler = async (Data) => {
    const res = await fetch('/api/apply-now', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Data),
    });

    if (!res.ok) {
        console.error('Failed to fetch data:', res.statusText);
        return null
    }

    const data = await res.json();

    return data;
}

export const contactUsAPiHandler = async (Data) => {
    const res = await fetch('/api/contact-us', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Data),
    });

    if (!res.ok) {
        console.error('Failed to fetch data:', res.statusText);
        return null
    }

    const data = await res.json();

    return data;
}

export const subscribeEmail = async (Data) => {
    const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Data),
    });

    if (!res.ok) {
        console.error('Failed to fetch data:', res.statusText);
        return null
    }

    const data = await res.json();

    return data;
}