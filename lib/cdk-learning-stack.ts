import * as cdk from 'monocdk';
import { Bucket } from 'monocdk/aws-s3';

export class CdkLearningStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new Bucket(this, 'TestBucket', {
      bucketName:'muskan-first-bucket'
    });
    
  }
}
