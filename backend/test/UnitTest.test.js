import nock from 'nock';
import { expect, request } from 'chai';

import app from '../app';

describe('Article controller', () => {
	let article;

	before(async () => {
		// connect to db
	});

	describe('post', () => {
		it('should return the right ', async () => {
			let response = await request(app).post(`/create`, {title:"test",location:"test",description:"test"});
			expect(response).to.have.status(200);
		});
	});

	describe('read by location', () => {
		it('should return the list by location', async () => {
			let response = request(app).get('/read',{location: "test1"});
			expect(response).to.have.status(200);
		});
	});

	after(async () => {
		// delete all created
	});
});
