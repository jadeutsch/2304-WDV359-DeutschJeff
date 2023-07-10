# Project & Portfolio

- **Research Notes - Milestone 1**
- **Jeff Deutsch**
- **11-27-2022**

<br>

## GitHub Workflow Best Practices

This document contains general notes related to some best practices for using [GitHub in a workflow]([1]), specifically in regards to branching models/strategies, commit messages, and using GitHub Issues.

<br>

### Branching Strategies

Effective branching strategies, as stated in [this article by Rowan Haddad]([2]), are beneficial for developer teams of any size. These branching strategies create consistent workflows, especially when speed and agility are crucial to developing and releasing software. Below are four types of strategies and a few notes about them.

1. GitFlow

   - Consists of 5 types of branches
     - `master/main`
     - `develop/dev`
     - `feature`
       - develops new features and is branched off `dev` branch
     - `release`
       - prepares new production release, branched off `dev`, merged to `dev` and `main`
     - `hotfix`
       - bug that needs to be resolved, merged to `main` and then `dev` branch
   - Allows for parallel development by protecting production code
   - Can be difficult to manage as the number of branches grow, and slow down development-release cycle

2. GitHub Flow

   - Considered a simpler alternative to GitFlow because there is not `dev` branch
   - Suited for small teams and web apps, allowing for CI/CD
   - More susceptible to bugs and unstable production code as team grows

3. GitLab Flow
   - Another simpler alternative to GitFlow that combines feature-driven development and feature branching with issue tracking
   - Great for maintaining several environments and has a staging environment separate from production
   - Best-suited for situations where release time is beyond control or specific deployment windows
4. Trunk-based Development
   - Integration occurs into a shared trunk instead of using branches
   - Developers make smaller, more frequent changes, avoiding long-lasting branches and merge conflicts
   - Uses feature flags which decouples deployment from release so any features not ready are kept hidden while other completed features can be released
   - More suited to senior developers because of the large amount of autonomy that non-experienced developers may find daunting

<br>

### Commit Messages

According to [this article from GitKraken]([3]), commits are snapshots of a local repository at a specific point in time. As such, commit messages help yourself and other developers to understand what changes were made to code, when they were made, and why. Consider it to be a more elaborate version of comments within code. But not all commit messages are good. Here are some key takeaways from a few sources:

- Commit messages consist of three components:
  - title/subject limited to 72 characters (required)
    - follows [this format]([4]) `scope: subject`
    - does not end with punctuation
    - first letter of subject can be [capitalized]([4]) or [not]([5])
    - uses imperative, present tense ('add' instead of 'added' or 'adds')
  - description/body with no character limit (optional)
  - footer referencing issue ID (optional)
- Denoting scope in the title, while some consider optional, further helps explain commit
  - common scopes include `feat`, `docs`, and `style`
- Commits can be written using different conventions, so long as consistency remains key

<br>

### GitHub Issues

GitHub Issues is a great way to track work that needs done. As stated in [Best Practices for Using GitHub Issues]([6]), it is most often used for reporting bugs and requesting features, but can also be used to host discussion, help process support requests, and submit documentation feedback. Listed below are the nine best practices regarding GitHub Issues.

1. If you're just starting, go with the defaults.

- GitHub's default issue settings are a great starting point to allow for any and all kinds of feedback
- Once there's a large user base, then feel free to adjust the settings

2. Encourage search to avoid duplication.

- Search for an issue before submitting a new one in case a question has already been answered, or at least an update on the issue itself

3. Add structure to issue reporting and encourage reporters to be specific.

- As you receive more issues, it may become helpful to start using templates to help separate them out into types

4. Route vulnerability reports elsewhere.

- When users begin reporting security vulnerabilities, it's good to keep them hidden until such time when a patch has been prepared to fix them

5. Use (but don't overuse) labels.

- Labels can help separate out issues even further, but having a lot of labels attached to each issue does more harm than good

6. Mention the appropriate people.

- You can mention others when you need their expertise, have them provide estimates, or just be aware of an issue
- Like labels, mention people sparingly and make it clear what it is you want from them

7. Choose a workflow to assign issues to developers.

- If your repository is private, you can agree to set assignees immediately
- If your repository is public, you can leave issues unassigned until a scheduled review takes place

8. Don't forget to close issues.

- Closing issues lets users know of changes made to their requests and helps developers decided what they need to do next

9. Backing up GitHub Issues.

- Especially for compliance, you can backup your issues along with your repositories using BackHub, which is the GitHub recommended BaaS

<br>

#### Reference Links

**Resource 1: _10 GitHub Workflow Best Practices_**
[1]: https://climbtheladder.com/10-github-workflow-best-practices/

**Resource 2: _What Are the Best Git Branching Strategies_**
[2]: https://www.flagship.io/git-branching-strategies/

**Resource 3: _Writing a Good Commit Message_**
[3]: https://www.gitkraken.com/learn/git/best-practices/git-commit-message

**Resource 4: _art of writing a good commit message_**
[4]: https://dev.to/wordssaysalot/art-of-writing-a-good-commit-message-56o7

**Resource 5: _Git commit message convention that you can follow!_**
[5]: https://dev.to/i5han3/git-commit-message-convention-that-you-can-follow-1709

**Resource 6: _Best Practices for Using GitHub Issues_**
[6]: https://rewind.com/blog/best-practices-for-using-github-issues/

<br>

**Note:**

Each of these resources are ones I reference, or will start to reference, often when I am working. I'm especially interested in looking more into GitKraken as it is technology I have heard of for using Git, but have not had a chance to dive more deeply into it.