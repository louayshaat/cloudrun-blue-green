# Cloud Run Blue/Green Deployments

## Google Cloud services which we will be using

- [Artifact Registry](https://cloud.google.com/artifact-registry)
- [Cloud Run](https://cloud.google.com/run)


Our simple microservice contains a cat endpoint, which returns a random cat name in the below format
![cats](cats.png)

### Artifact Registry

Create a repository in the Artifact Registry, give it a name and select a region.

![artifact](artifact.png)
Once the repository is created, run the setup instructions on your machine. The setup instructions are available in the console, this command will change based on the region that you select during the repository creation.

```
gcloud auth configure-docker us-central1-docker.pkg.dev
```

### Build and push the Docker image to Artifact Registry

Below commands are used to build and push the container image to the repository that we created in Artifact Registry

```
docker build -t cat-service-blue .
docker tag cat-service-blue us-central1-docker.pkg.dev/core-demos/blue-green/cat-service:blue
docker push us-central1-docker.pkg.dev/core-demos/blue-green/cat-service:blue
```

Once the image is pushed, we can view it in the Artifact Registry
![repo](repo.png)

### Cloud Run

Run the below gcloud command to run our cat-service on Cloud Run using the image that we pushed to Artifact Registry,

```
gcloud run deploy cat-service --image=us-central1-docker.pkg.dev/core-demos/blue-green/cat-service:blue --tag=blue --region=us-central1 --allow-unauthenticated
```
We can view our cat-service in the console,
![run](cloudrun.png)

Access the url of the cat-service and test the /cat endpoint


[https://cat-service-u7xvbpiada-uc.a.run.app/cat](https://blue---cat-service-6pi2y3i3iq-uc.a.run.app/cat) endpoint is working fine, and is using the image with blue tag

