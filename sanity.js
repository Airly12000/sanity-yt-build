import { createClient, createCurrentUserHook } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const config = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	apiVersion: '2021-05-23',
	useCdn: process.env.NODE_ENV === 'production',
};

// Set up client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// Used to extract image url
export const urlFor = (source) => imageUrlBuilder(config).image(source);

// Helper function for using the current logged in user account
// export const useCurrentUser = createCurrentUserHook(config);
