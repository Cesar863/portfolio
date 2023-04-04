import { zip } from 'zip-a-folder';

class ZipLambda {

    static async main() {
        await zip('../lambda', '../lambdaFunction.zip');
    }
}

ZipLambda.main();