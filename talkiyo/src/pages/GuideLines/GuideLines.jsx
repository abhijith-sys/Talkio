import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import styles from "./GuideLines.module.css"
import Footer from '../../components/Footer/Footer'

const GuideLines = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.content}>
                <h1 className={styles.heading}>Talkiyo  App Community Guidelines</h1>

                <section className={styles.section}>
                    <p className={styles.paragraph}>
                        Talkiyo  App is a platform that strives to create meaningful, kind connections and genuine engagement in a safe, inclusive, and respectful way within its vibrant community. To achieve this, we have established Community Guidelines that form the foundation for a positive and inclusive user experience.
                    </p>
                    <p className={styles.paragraph}>
                        The Community Guidelines help keep our members safe. They make it clear what content and conduct is not acceptable on our platform. Complying with these rules contributes to a thriving community that embraces diversity, fosters constructive discussions, and ensures a safe environment for all. Failure to abide by these guidelines may lead to appropriate actions, including but not limited to content removal, informing authorities if necessary, and potential account suspension or termination. These measures are taken to uphold the integrity and well-being of our community.
                    </p>
                    <p className={styles.warning}>
                        Please be aware that this is not an exhaustive list, and there may be other instances that may violate these guidelines. Violating these guidelines may lead to serious legal consequences as per Indian law.
                    </p>
                </section>

                {/* Profile Guidelines */}
                <section className={styles.section}>
                    <h2 className={styles.subheading}>Profile Guidelines</h2>
                    <ul className={styles.list}>
                        <li>Age: You need to be at least 18 years old to join Talkiyo  App. Creating a profile that intentionally misrepresents you as being under the age of 18 is not allowed. We reserve the right to ask for your ID to verify your age, and we’ll block you from Talkiyo App if you’re underage..</li>
                    </ul>
                </section>

                {/* Content and Conduct Guidelines */}
                <section className={styles.section}>
                    <h2 className={styles.subheading}>Content and Conduct Guidelines</h2>
                    <p className={styles.paragraph}>
                        We maintain strict guidelines on acceptable content and conduct. These include prohibitions on:
                    </p>
                    <ul className={styles.list}>
                        <li>
                            <strong>Adult Nudity and Sexual Activity:</strong> We don’t permit nude, sexually explicit, or sexually vulgar profile content. We also don’t allow the commercial exchange of any romantic or sexual activity, content, or services, including attempts to sell, advertise, or buy adult sexual content.
                        </li>
                        <li>
                            <strong>Audio and Video Call Restrictions:</strong> However, we don’t allow the following in audio and video calls:
                            <ul className={styles.nestedList}>
                                <li>Nudity and Pornography:</li>
                                <li>
                                    People where the following is shown, even if covered or partially covered by emojis, hair, or transparent clothing:
                                    <ul className={styles.nestedList}>
                                        <li>Genitals or pubic regions</li>
                                        <li>Bare buttocks</li>
                                        <li>Women’s nipples and areolas</li>
                                        <li>Visible explicit outlines of genitals</li>
                                    </ul>
                                </li>
                                <li>People in lingerie or underwear</li>
                                <li>Shirtless indoor photos</li>
                                <li>Sexual acts of any kind, even if not explicitly visible</li>
                                <li>
                                    Digitally-created or drawn imagery (e.g., cartoons, memes, anime, drawings) that depicts any of the above. This imagery doesn’t necessarily have to include human beings.
                                </li>
                                <li>Any material involving child pornography, grooming activities, or depictions of child sexual abuse.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Harassment or Bullying:</strong>
                            <ul className={styles.nestedList}>
                                <li>
                                    <strong>Abusive Language:</strong> Examples: Using offensive language or curse words during calls.
                                </li>
                                <li>
                                    <strong>Discrimination:</strong> Examples: Insulting or harassing someone based on their gender, race, ethnicity, etc. (physical characteristics, such as skin color, facial features, and hair texture, which are often used to categorize people into groups. This is typically associated with shared ancestry and genetic traits).
                                </li>
                                <li>
                                    <strong>Non-Consensual Sharing:</strong> Examples: Taking/Clicking or sharing someone's personal images without their permission.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Prohibited Actions and Content:</strong>
                            <ul className={styles.nestedList}>
                                <li>
                                    <strong>Bullying:</strong> Examples: Threatening or repeatedly bothering someone.
                                </li>
                                <li>
                                    <strong>Nudity:</strong> Examples: Appearing naked or showing body parts on camera. (Coming on camera shirtless/only wearing a vest).
                                </li>
                                <li>
                                    <strong>Inappropriate Actions:</strong> Examples: Making sexual gestures or inappropriate facial expressions. (Flying kiss, winking, inappropriate hand gesture).
                                </li>
                                <li>
                                    <strong>Sexual Content:</strong> Examples: Discussing sexual topics or showing inner wear or underwear.
                                </li>
                                <li>
                                    <strong>Hate Speech:</strong> Examples: Making derogatory comments about a race or religion.
                                </li>
                                <li>
                                    <strong>Religious and Community Content:</strong> Examples: Insulting any religion/religious symbols or spreading hate propaganda.
                                </li>
                                <li>
                                    <strong>Violence:</strong> Examples: Displaying or promoting violent acts.
                                </li>
                                <li>
                                    <strong>Sensitive Content:</strong> Examples: Showing content related to self-harm or abuse.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Clothing and Appearance:</strong> Appearing in innerwear is not allowed.
                        </li>
                        <li>
                            <strong>General Guidelines for All Users:</strong>
                            <ul className={styles.nestedList}>
                                <li>
                                    <strong>Age Requirement:</strong> Requirement: All users must be 18 years or older.
                                </li>
                                <li>
                                    <strong>Respectful Communication:</strong> Examples: Do not share personal information of others without consent.
                                </li>
                                <li>
                                    <strong>Legal Compliance:</strong> Examples: Follow all applicable laws and regulations during calls.
                                </li>
                                <li>
                                    <strong>Reporting Violations:</strong> Examples: Report any behavior that breaks these guidelines immediately on helpTalkiyo@gmail.com .
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Commercial Exchange Prohibited:</strong> We also don’t allow Talkiyo App to be used for any commercial exchange of sexual or romantic acts of any kind. This includes, but isn’t limited to, the following:
                            <ul className={styles.nestedList}>
                                <li>Any attempts to sell, advertise, or buy sexual acts in exchange for money or something of value (e.g., sex work, escort services).</li>
                                <li>Any attempts to sell, advertise, or buy adult sexual content (e.g., pornography, sexual live streams/webcamming). This includes using the platform to promote or re-route members to adult content websites.</li>
                                <li>Any behavior seeking or offering a romantic or sexual arrangement in exchange for money, financial support, or gifts (e.g., seeking a “sugar daddy” or “sugar baby”).</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Sexual Harassment:</strong> Our mission at Talkiyo App is to foster healthy and equitable relationships through kind connections, so we wholly prohibit sexual harassment. We consider sexual harassment to be any non-physical, unwanted, and unwelcome sexual behaviors between members.
                            <ul className={styles.nestedList}>
                                <li>Cyberflashing (i.e., sharing unsolicited sexually explicit images).</li>
                                <li>Committing in-person indecent exposure (i.e., unwanted flashing on a date).</li>
                                <li>Obtaining, sharing, or threatening to share sexual images, videos, or screenshots of sexual conversations on any website or platform, without the consent of the person involved or depicted (commonly known as “revenge porn” or “non-consensual intimate image sharing”).</li>
                                <li>Making unwanted sexual comments, questions, and advancements, including sexualized comments about someone’s body.</li>
                                <li>Fetishizing a member without their consent.</li>
                                <li>Sending unwanted sexualized imagery, including memes, animations, drawings, etc., as well as unwanted pornographic imagery or links.</li>
                            </ul>
                            <p className={styles.paragraph}>
                                Remember, your off-platform behavior matters too. To protect victims and survivors, we may take action against your account for engaging in any of the above sexual harassment behaviors in person, on another platform, or over text.
                            </p>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className={styles.subheading}>Bullying and Abusive Conduct</h2>
                    <p className={styles.paragraph}>
                        Our community is for creating kind connections. We don’t allow content or behavior that makes any individual or group feel harassed, bullied, or targeted. This includes belittling, insulting, or intimidating behavior; making unsolicited comments about someone’s appearance; engaging in emotional abuse; blackmail; repeated unwanted contact; or wishing, encouraging, or praising acts of violence. We aim to create an experience which is free from behavior that makes any individual or group feel harassed, bullied, or targeted.
                    </p>

                    <h3 className={styles.subheading}>Members should not:</h3>
                    <ul className={styles.list}>
                        <li>Engage in any bullying, belittling, insulting, mocking, trolling, intimidating, dehumanizing, or degrading behavior</li>
                        <li>Make harmful unsolicited comments about someone’s body or appearance (e.g. body shaming)</li>
                        <li>Wish, encourage, or praise acts of violence, or threatening acts of violence that would result in non-serious bodily injury</li>
                        <li>Engage in emotional abuse and/or manipulation</li>
                        <li>Repeat unwanted online contact of any kind</li>
                        <li>Blame, shame, or target someone based on their status as a survivor/victim of sexual assault, sexual exploitation, sexual harassment, or domestic abuse</li>
                        <li>Release a person’s private contact information, photos, or other personally identifying information without their consent</li>
                        <li>Blackmail a member to reveal embarrassing, compromising or otherwise private information (not including sexual or intimate content)</li>
                        <li>Not show up to an in-person meet up despite clear plans agreed by both parties</li>
                        <li>Create a profile with malicious intent to publish defamatory content about a person</li>
                        <li>Share content that is disrespectful toward victims, survivors, or families impacted by suicide, self-injury, or eating disorders</li>
                    </ul>

                    <p className={styles.paragraph}>
                        This includes content about public figures. Members are permitted to express their criticism of public figures, but we will not tolerate abusive conduct in any form.
                    </p>

                    <h2 className={styles.subheading}>Child Sexual Exploitation and Abuse</h2>
                    <p className={styles.paragraph}>
                        We have a zero tolerance policy towards any form of child sexual exploitation and abuse. We don’t allow content that sexualizes or endangers children, real or fictional (e.g. anime, media, text, illustrations, or digital images). This includes any visual depictions or discussions of sexually explicit conduct involving a child. For the purposes of this policy, a child is anyone under the age of 18. It’s prohibited to upload, store, produce, share, or entice anyone to share child sexual abuse material, even if the intent is to express outrage or raise awareness about this issue.
                    </p>
                    <p className={styles.paragraph}>
                        We understand that members might want to talk about and share images of their children with their connections. Any discussions about children must remain appropriate, relevant, and lawful. In addition, if you decide to include photos of children in your profile, they must be completely clothed and they cannot appear alone in the image. This includes any photos from your childhood.
                    </p>
                    <p className={styles.paragraph}>
                        We don’t allow profile photos of babies’, toddlers’ or children’s genitalia or buttocks even when they’re covered or partially covered by emojis. Any violation of this policy will result in a member being removed from Talkiyo App and reported to the authorities.
                    </p>

                    <h2 className={styles.subheading}>Controlled Goods and Substances</h2>
                    <p className={styles.paragraph}>
                        We don’t allow members to use our platforms to buy, sell, supply, distribute, or directly facilitate the purchase, sale, supply, or distribution of illegal drugs and/or the misuse of controlled goods and substances. This includes: e-cigarettes, marijuana, drug paraphernalia, or the misuse of legal substances like prescription drugs, tobacco, or alcohol.
                    </p>

                    <h2 className={styles.subheading}>Dangerous Organizations and Individuals</h2>
                    <p className={styles.paragraph}>
                        We don’t permit organizations or individuals that proclaim, glorify, condone, or are known to support a violent, dangerous, or terrorist-based mission to have a presence on Talkiyo App.
                    </p>

                    <h2 className={styles.subheading}>Identity-Based Hate</h2>
                    <p className={styles.paragraph}>
                        We aim to foster a diverse and inclusive community on Talkiyo App. We prohibit content or behavior that promotes or condones hate, dehumanization, degradation, or contempt against marginalized or minoritized communities based on the following protected attributes: race/ethnicity, national origin/nationality/immigration status, caste, sex, gender identity or expression, sexual orientation, disability or serious health condition, or religion/belief.
                    </p>

                    <h2 className={styles.subheading}>Inauthentic Profiles</h2>
                    <p className={styles.paragraph}>
                        Talkiyo App celebrates authenticity, and we expect all our members to represent themselves accurately on their profile. We don’t allow impersonation or misrepresentation on our platform. This includes catfishing (i.e. creating an online persona that isn’t you) or falsely stating facts about yourself (including name, gender, age, and permanent location).
                    </p>

                    <h2 className={styles.subheading}>Misinformation</h2>
                    <p className={styles.paragraph}>
                        We prohibit the sharing of demonstrably false or substantially misleading content that’s likely to cause serious harm or negatively impact individual or public safety. This includes content that directly contradicts information and guidance from leading and reputable global health organizations and public health authorities, false or misleading information on any civic process, and dangerous and unproven conspiracy-type theories.
                    </p>

                    <h2 className={styles.subheading}>Physical and Sexual Violence</h2>
                    <p className={styles.paragraph}>
                        We don’t tolerate any content, imagery, or behavior that commits or threatens credible acts of physical or sexual violence. This includes physical stalking, using our platform to assist, facilitate or support exploitation or human trafficking, and sexual assault of any kind, which we define as unwanted physical contact or attempted physical contact that is sexual in nature.
                    </p>

                    <h2 className={styles.subheading}>Scams and Theft</h2>
                    <p className={styles.paragraph}>
                        Talkiyo App prohibits any scam or theft activity intended to defraud or manipulate members out of financial or material resources. This includes requesting or seeking financial support, lying about your intentions for financial gain, or faking romantic intentions to deceive members out of financial or material resources.
                    </p>

                    <h2 className={styles.subheading}>Suicide and Self-Injury Promotion</h2>
                    <p className={styles.paragraph}>
                        We care deeply about our members and understand that some may struggle with mental health, self-injury, suicidal thoughts, substance use, or eating disorders. While we do allow members to share personal experiences with these issues in a safe way, we don’t allow any content that depicts, promotes, glorifies, or assists in activities that could lead to suicide, self-injury, or disordered eating or body image.
                    </p>
                </section>
                <div>
                    <h2 className={styles.subheading}>Violent and Graphic Content</h2>
                    <p className={`${styles.paragraph} ${styles.textColor}`}>We don’t permit violent, graphic, or gory content. This includes descriptions of violence in usernames or profile content, photos containing real or realistic-appearing blood, bodily fluids, or injury, or images depicting guns of any kind (except on a uniformed member of law enforcement or military personnel).</p>
                    <p className={`${styles.paragraph} ${styles.textColor}`}>This includes, but isn’t limited to:</p>
                    <ul className={`${styles.list} ${styles.textColor}`}>
                        <li>Imagery containing real or realistic-appearing blood, bodily fluids, violence, or injury. This includes:</li>
                        <ul className={styles.list}>
                            <li>Excessive blood that appears to be real</li>
                            <li>Graphic injuries or wounds, including those of self-injury, hunting, or food preparation</li>
                            <li>Human bones or internal organs</li>
                            <li>Fetal remains or miscarriages</li>
                            <li>Graphic imagery of medical procedures</li>
                            <li>Imagery that shows the violent, shocking, or graphic death or injury of a person or animal</li>
                            <li>Imagery containing human remains or corpses</li>
                        </ul>
                        <li>Images depicting guns of any kind (except on a uniformed member of law enforcement or military personnel)</li>
                        <li>General references or descriptions of violence in usernames or profile content</li>
                        <li>General description of violence or physical injuries in graphic detail including references to dangerous organizations and individuals</li>
                    </ul>

                    <h2 className={styles.subheading}>Platform Manipulation</h2>
                    <p className={`${styles.paragraph} ${styles.textColor}`}>We prioritize fostering a community built on genuine connections, so any attempts to artificially influence connections, matching, conversations, or engagement through the use of automation or scripting is strictly prohibited.</p>

                    <h2 className={styles.subheading}>Safety Reporting</h2>
                    <p className={`${styles.paragraph} ${styles.textColor}`}>Safety is a top priority at Talkiyo App. We use a combination of human moderators and automated systems to monitor and review Talkiyo App accounts and interactions for content that may be against our Community Guidelines, against our Terms and Conditions, or otherwise harmful.</p>
                    <p className={`${styles.paragraph} ${styles.textColor}`}>Our members play a critical role in the safety of Talkiyo App by reporting content or behavior that may violate our Community Guidelines. If anything happens that makes you feel uncomfortable or unsafe, we highly encourage you to Block & Report.</p>
                    <p className={`${styles.paragraph} ${styles.textColor}`}>However, please consider that disagreeing with or disliking a member or their content is not necessarily a reason to report them. We may take action against a member if we've found them to be intentionally creating false or inappropriate reports against other members solely based on their protected attributes. This includes reporting transgender or nonbinary members for no reason other than their gender identity or expression or repeatedly sending false reports of bad behavior.</p>
                    <p className={`${styles.paragraph} ${styles.textColor}`}>All members must comply with the platform rules described and referenced in our Community Guidelines. If you behave in a way that goes against Talkiyo App’s Community Guidelines, values, or otherwise act in any way we believe to be potentially harmful to Talkiyo App or its members, we may take a range of actions on your account. When determining the penalty for violating our community guidelines, we consider a number of factors.</p>
                    <p className={`${styles.paragraph} ${styles.textColor}`}>For example, we may:</p>
                    <ul className={`${styles.list} ${styles.textColor}`}>
                        <li>Remove the content</li>
                        <li>Issue a warning</li>
                        <li>Ban the offending member from Talkiyo App</li>
                    </ul>
                    <p className={`${styles.paragraph} ${styles.textColor}`}>When necessary, we also may cooperate with law enforcement to assist in potential criminal investigations related to member conduct. Your treatment towards others outside of the Talkiyo App can also result in action against your account. If we’re made aware of harm between members on dates, meetups with friends, via text message or direct messaging platforms, or relevant alleged criminal or harmful conduct committed in your past or outside of Talkiyo App, we may take action as if it happened on our platform. If you believe we’ve made a mistake in taking action on your account or content, you can always contact us here helpTalkiyo@gmail.com</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default GuideLines
