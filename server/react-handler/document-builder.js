import { minify } from 'html-minifier';
import fs from 'fs';
import path from 'path';

const template = fs.readFileSync(
    path.join(__dirname, '..', '..', 'static', 'index.html')
).toString();

export default function ({content="", title="", meta="", links=""}={}) {
    return minify(
        template
            .replace('<!--STUB_TITLE-->', title)
            .replace('<!--STUB_META-->', meta)
            .replace('<!--STUB_LINKS-->', links)
            .replace('<!--STUB_APP-->', content),
        {
            collapseWhitespace: true,
			removeComments: true,
			removeAttributeQuotes: true
        }
    );
}
