import { http, HttpResponse} from 'msw';
import data1 from './data1.json'
import data2 from './data2.json'

export const Handlers = [
    http.get('/data1', () => HttpResponse.json(data1)),
    http.get('/data2', () => HttpResponse.json(data2)),
];