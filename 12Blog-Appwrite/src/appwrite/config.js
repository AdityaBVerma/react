import { Client, Databases, ID, Query, Storage } from "appwrite"
import conf from "../conf/conf.js"

export class service {
    client = new Client()
    database
    bucket

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.database = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost ({title, slug, content, featuredImage, status, userId}) {
        try {
            return await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Error in creating Post :: ", error)
        }
    }

    async updatePost (slug, {title, content, featuredImage, status}) {
        try {
            return await this.database.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Error in updating Post :: ", error)
        }
    }

    async deletePost (slug) {
        try {
            await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Error in deleting Post :: ", error)
            return false
        }
    }

    async getPost ( slug ) {
        try {
            return await this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("Error in getting Post :: ", error)
            return false
        }
    }

    async getPosts ( queries = [ Query.equal("status", "active") ]) {
        try {
            return await this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Error in getting Posts :: ", error)
            return false
        }
    }

    // file uploads

    async uploadfile ( file ) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Error in uploading file :: ", error)
            return false
        }
    }

    async deleteFile ( fileId ) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Error in deleting file :: ", error)
            return false
        }
    }

    getFilePreview ( fileId ) {
        try {
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Error in getting file preview :: ", error)
        }
    }

}

const Service = new service()

export default Service