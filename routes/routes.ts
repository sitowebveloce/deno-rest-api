// Import router
import { Router } from 'https://deno.land/x/oak/mod.ts';
const router = new Router();
// Routes from controller
import { getEbooks, getEbook, addEbook, updateEbook, deleteEbook } from '../controllers/controller.ts';
// ROUTER GET AND POST
router.get('/ebooks', getEbooks)
    .get('/ebook/:id', getEbook)
    .post('/addebook', addEbook)
    .put('/upebook/:id', updateEbook)
    .delete('/delebook/:id', deleteEbook);

// Like node, in deno, you need to export
export default router;