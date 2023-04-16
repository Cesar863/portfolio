import AWS from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env);
const key = process.env.AWS_ACCESS_KEY_ID_DYNAMO
console.log(key);

const credentials = new AWS.Credentials({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID_DYNAMO,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_DYNAMO
});
console.log(credentials);

AWS.config.update({
    region:'us-east-1',
    credentials: credentials
})

AWS.config.credentials = credentials;

const dynamodb = new AWS.DynamoDB.DocumentClient();

export const incrementViewCount = () => {
    const timestamp = new Date().getTime();
    const pageId = 'home'

    const params = {
        TableName: 'PageViews',
        Key: {
            'page_id': pageId,
            'timestamp': timestamp
        },
        UpdateExpression: 'ADD views :incr',
        ExpressionAttributeValues: {
            ':incr': 1
        }
    };

    dynamodb.update(params, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log('View count incremented for page ' + pageId);
        }
    });
};