from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from accounts.models import UserProfile,RecruiterProfile
from django.contrib.auth import get_user_model
from recruiter.models import JobApplication
from recruiter.models import Job
from accounts.models import Account
User = get_user_model()



class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Account
        fields = ['id','first_name', 'last_name', 'email','phone_number']
    
    def update(self, instance, validated_data):
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.email = validated_data.get('email', instance.email)
        instance.phone_number = validated_data.get('phone_number', instance.phone_number)
        print(instance)
        instance.save()
        return instance
        
        
class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email','phone_number','username','token','is_superadmin','is_recruiter','is_seeker','is_active']
    def get_token(self,obj):
        token=RefreshToken.for_user(obj)
        return str(token.access_token)
    
class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ["id","first_name", "last_name", "email", "phone_number","password","is_seeker","is_recruiter","is_active"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        if validated_data["is_seeker"]:
            user = User(
                first_name=validated_data["first_name"],
                last_name=validated_data["last_name"],
                email=validated_data["email"],
                phone_number=validated_data['phone_number'],
                username=validated_data['email'].split('@')[0],
             )
            user.is_seeker = True
            user.set_password(validated_data["password"])
            
            user.save()
            UserProfile.objects.create(user=user)
        else:
            user = User(
               first_name=validated_data["first_name"],
               last_name=validated_data["last_name"],
               email=validated_data["email"],
               phone_number=validated_data["phone_number"],
               username=validated_data["email"].split("@")[0],
        )
            user.is_recruiter = True
            user.set_password(validated_data["password"])
            user.is_active = True
            user.save()
            RecruiterProfile.objects.create(user=user)
       
        return user

class VerifyAccountSerailizer(serializers.Serializer):

    model = Account
    fields = ['id','otp']
    

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['title','profile_picture','bio','skill','desired_job','desired_location','degree','college','joining_year','passout_year','designation','company','start','end','description','percentage']
    
    def update(self, instance, validated_data):
        print(instance,"iam")
        
        instance.title = validated_data.get('title', instance.title)
        instance.bio = validated_data.get('bio', instance.bio)
        instance.skill = validated_data.get('skill', instance.skill)
        instance.desired_job = validated_data.get('desired_job', instance.desired_job)
        instance.desired_location = validated_data.get('desired_location', instance.desired_location)
        instance.degree = validated_data.get('degree', instance.degree)
        instance.college = validated_data.get('college', instance.college)
        instance.joining_year = validated_data.get('joining_year', instance.joining_year)
        instance.passout_year = validated_data.get('passout_year', instance.passout_year)
        instance.designation = validated_data.get('designation', instance.designation)
        instance.company = validated_data.get('company', instance.company)
        instance.start = validated_data.get('start', instance.start)
        instance.end = validated_data.get('end', instance.end)
        instance.description = validated_data.get('description', instance.description)
        instance.percentage = validated_data.get('percentage', instance.percentage)
        print(instance,"here")
        instance.save()
        return instance
    
class UserProfilePicSerializer(serializers.ModelSerializer):
    print("here")
    profile_picture=serializers.ImageField(required=False)
    
    class Meta:
        model = UserProfile
        fields = ["profile_picture"]  
        
class RecruiterProfilePicSerializer(serializers.ModelSerializer):
    print("here")
    profile_picture=serializers.ImageField(required=False)
    
    class Meta:
        model = RecruiterProfile
        fields = ["profile_picture"]  
              
class RecruiterProfileSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = RecruiterProfile
        fields = ['company_address_line1','company_address_line2','profile_picture','company_email','company_mobile','company_name','company_website','description','location','position','recruiter_bio']
        
    def update(self, instance, validated_data):
        print(instance,"iam")
        
        instance.company_email = validated_data.get('company_email', instance.company_email)
        instance.company_mobile = validated_data.get('company_mobile', instance.company_mobile)
        instance.company_name = validated_data.get('company_name', instance.company_name)
        instance.company_website = validated_data.get('company_website', instance.company_website)
        instance.description = validated_data.get('description', instance.description)
        instance.location = validated_data.get('location', instance.location)
        instance.position = validated_data.get('position', instance.position)
        instance.company_address_line1 = validated_data.get('company_address_line1', instance.company_address_line1)
        instance.company_address_line2 = validated_data.get('company_address_line2', instance.company_address_line2)
        instance.recruiter_bio = validated_data.get('recruiter_bio', instance.recruiter_bio)
        print(instance,"here")
        instance.save()
        return instance


class UserProfileUpdateSerializer(serializers.ModelSerializer):
    users_account = UserSerializer(many = True)
    
    class Meta:
        model = UserProfile
        fields=["id","title","bio","skill","desired_job","desired_location","degree","college","joining_year","passout_year","designation","company","start","end","description","percentage","users_account"]
    
   
    
    def update(self, instance, validated_data):
        print("HEY")
        users_data = validated_data.pop('users_account')
        users=(instance.users_account).all()
        users=list(users)
        
        instance.title = validated_data.get('title',instance.title)
        instance.bio  = validated_data.get('bio',instance.bio)   
        instance.skill = validated_data.get('skill',instance.skill)   
        instance.desired_job = validated_data.get('desired_job',instance.desired_job)   
        instance.desired_location = validated_data.get('desired_location',instance.desired_location)   
        instance.degree = validated_data.get('degree',instance.degree)   
        instance.college = validated_data.get('college',instance.college)
        instance.joining_year = validated_data.get('joining_year',instance.joining_year) 
        instance.passout_year = validated_data.get('passout_year',instance.passout_year) 
        instance.designation = validated_data.get('designation',instance.designation)
        instance.company = validated_data.get('company',instance.company)  
        instance.start = validated_data.get('start',instance.start)  
        instance.end = validated_data.get('end',instance.end)    
        instance.description = validated_data.get('description',instance.description)   
        instance.percentage = validated_data.get('percentage',instance.percentage)    
        instance.save()
        for user_data in users_data:
            user = users.pop(0)
            user.first_name = user_data.get('first_name',user.first_name)
            user.last_name = user_data.get('last_name',user.last_name)
            user.email = user_data.get('email',user.email)
            user.phone_number = user_data.get('phone_number',user.phone_number)
            user.save()
            print(instance)
            return instance

            
class JobPostSerializer(serializers.ModelSerializer):
    
    company_name = serializers.ReadOnlyField(source="company.company_name",read_only=True)
    first_name = serializers.ReadOnlyField(source="company.user.first_name",read_only=True)
    last_name = serializers.ReadOnlyField(source="company.user.last_name",read_only=True)
    company_website = serializers.ReadOnlyField(source="company.company_website",read_only=True)
    company_email = serializers.ReadOnlyField(source="company.company_email",read_only=True)
    company_mobile = serializers.ReadOnlyField(source="company.company_mobile",read_only=True)
    company_address_line1 = serializers.ReadOnlyField(source="company.company_address_line1",read_only=True)
    company_address_line2 = serializers.ReadOnlyField(source="company.company_address_line2",read_only=True)
    
    class Meta:
        model = Job
        fields = ("id","category","designation","first_name","last_name","company_website","company_email","company_mobile","company_address_line1","company_address_line2","company_name","vacancies","location","type","workmode","experience_from","experience_to","job_description","criteria","payscale_from","payscale_to","is_active","applicants","hired")
        
    def update(self, instance, validated_data):
        
        
        instance.category = validated_data.get('category', instance.category)
        instance.designation = validated_data.get('designation', instance.designation)
        instance.vacancies = validated_data.get('vacancies', instance.vacancies)
        instance.location = validated_data.get('location', instance.location)
        instance.type = validated_data.get('type', instance.type)
        instance.workmode = validated_data.get('workmode', instance.workmode)
        instance.experience_from = validated_data.get('experience_from', instance.experience_from)
        instance.experience_to = validated_data.get('experience_to', instance.experience_to)
        instance.job_description = validated_data.get('job_description', instance.job_description)
        instance.criteria = validated_data.get('criteria', instance.criteria)
        instance.payscale_from = validated_data.get('payscale_from', instance.payscale_from)
        instance.payscale_to = validated_data.get('payscale_to', instance.payscale_to)
        instance.is_active = validated_data.get('is_active', instance.is_active)
        instance.applicants = validated_data.get('applicants', instance.applicants)
        instance.hired = validated_data.get('hired', instance.hired)
        print(instance,"here")
        instance.save()
        return instance
    
    def create(self,validated_data):
        
        id =self.context.get("user_id")
        user = Account.objects.get(pk=id)
        rec_profile = RecruiterProfile.objects.get(user=user)
        job = Job.objects.create(company=rec_profile,
                                 category = validated_data["category"],
                                designation = validated_data["designation"],
                                vacancies = validated_data["vacancies"],
                                location = validated_data["location"],
                                type = validated_data['type'],
                                workmode = validated_data['workmode'],
                                experience_from = validated_data['experience_from'],
                                experience_to = validated_data['experience_to'],
                                job_description = validated_data['job_description'],
                                criteria = validated_data['criteria'],
                                payscale_from = validated_data['payscale_from'],
                                payscale_to = validated_data['payscale_to'])
        job.save()
        return job
       
       
            
    
class JobApplicationSerializer(serializers.ModelSerializer):
    user = UserProfile()
    job = JobPostSerializer()
    class Meta:
        model = JobApplication
        fields = '__all__'
            
       
       
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    