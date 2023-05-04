# Project & Portfolio 

* **Additional Research Notes**
* **Jeff Deutsch**

<br>


## Topic

This document contains general notes related to various topics.

<br>

## Off-loading Images
This topic covers how to use AWS S3 Buckets to store and host images for projects. This is with the understanding that, after a certain amount of capacity has been filled and depending on what kind of traffic the sites receive, there is a possibility of payment that will need to happen. 
All steps, except for [steps 5 through 7]([2]), are taken from [this article on Medium]([1]).

1. Navigate to S3 in AWS
2. Click "Create bucket"
3. Enter a bucket name (without spaces and uppercase letters)
4. Select region
5. Uncheck "Block _all_ public access"
6. Check the box that starts with "I acknowledge..."
7. Select "ACLs enabled"
	- Note: DO NOT leave "ACLs disabled (recommended)" selected or this will not work and a new bucket will need to be created
8. Click "Create Bucket"
9. Add named folders coinciding with each project you are needing to store images for
10. Upload files to each folder
11. Select any and/or all of the files you want to make public
12. Select the "Actions" button
13. Select "Make public using ACL"
14. Select "Make public"

Now the URLs associated with each image can be used in the _src_ attributes for image calls.

<br>

## Reference Links

**Resource 1: _How To Store Images For My App: AWS S3_**  
[1]: https://medium.com/the-freelancer/store-your-images-with-aws-s3-60b7ac167f8b

**Resource 2: _why option to make it public is grey out? (S3/Bucket/Object)_**    
[2]: https://acloudguru.com/forums/certified-solutions-architect-associate/why-option-to-make-it-public-is-grey-out-s3-bucket-object#:~:text=This%20is%20a%20recent%20change,understanding%20what%20they%20are%20doing


